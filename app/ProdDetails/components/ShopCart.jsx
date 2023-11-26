import Swal from 'sweetalert2';
import { UserAuth } from '@/app/context/AuthContext';
import { set, update, ref, onValue, get, child } from 'firebase/database';
import { db } from '@/app/context/firebase';
import { useState, useEffect } from 'react';

export default function ShopCart(value) {
    const { currentUser } = UserAuth();
    const [product, setProduct] = useState([{ source: "", title: "" }]);

    useEffect(() => {
        onValue(ref(db, 'product'), (snapshot) => {
            const data = snapshot.val();
            setProduct(data);
        }, {
            onlyOnce: true
        })
    }, []);

    const showBuyModal = () => {
        if(!currentUser){
          router.push("/auth")
        } else {
          const inputValue = 1
          const inputStep = 1
      
          Swal.fire({
            title: 'Specify your Order',
            html: `
              <input
                type="number"
                value="${inputValue}"
                step="${inputStep}"
                class="swal2-input"
                id="range-value"> pack`,
            confirmButtonText: 'Add to Cart',
            
            didOpen: () => {
              const inputNumber = Swal.getPopup().querySelector('#range-value')
              inputNumber.style.width = '50%'
            },
            preConfirm: () => {
                const inputValue = Swal.getPopup().querySelector('#range-value').value
                if (!inputValue || inputValue < 1) {
                  Swal.showValidationMessage(`Please enter the quantity`)
                }
                

                get(child(ref(db), 'cart/' + currentUser.uid + '/' + value['value'])).then((snapshot) => {
                    if(snapshot.exists()) {
                        update(ref(db), {
                            ['cart/' + currentUser.uid + '/' + value['value'] + '/quantity']: snapshot.val().quantity + Number(inputValue)
                        })
                    } else {
                        set(ref(db, 'cart/' + currentUser.uid + '/' + value['value']), {
                            quantity: Number(inputValue),
                            key: value['value'],
                            name: product[value['value']].title,
                            price: product[value['value']].price,
                            source: product[value['value']].source
                        })
                    }
                }
                )
            }
          })
        }
    }

    return (
        <button 
            className="group relative overflow-hidden bg-primaryTwo focus:ring-4 focus:ring-primaryTwo inline-flex items-center px-7 py-2.5 rounded-lg text-white justify-center" onClick={() => showBuyModal(value)}>
            <span className="z-40">Add to Cart</span>
            <svg className="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1" fill="currentColor"
              viewBox="0 0 902.86 902.86" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
                M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                clip-rule="evenodd"></path>
              <path fill-rule="evenodd"
                d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                S619.162,694.432,619.162,716.897z"clip-rule="evenodd"></path>
            </svg>
            <div
              className="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-white/30 group-hover:translate-x-[50%] z-20 duration-1000">
            </div>
        </button>
    )
}