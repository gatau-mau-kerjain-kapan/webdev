import { useContext, createContext, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    getAuth,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    setPersistence,
    browserSessionPersistence,

} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const emailSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setCurrentUser(user);
        })
    };

    const emailSignUp = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            updateProfile(userCredential.user, {
                displayName : name,
            })
            console.log(userCredential.user);
            setCurrentUser(userCredential.user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    };

    const emailLogOut = () => {
        signOut(auth);
        setCurrentUser(null);
    }

    const googleSignIn = () => {
        if(!auth.currentUser) {
          setPersistence(auth, browserSessionPersistence)
          .then(() => {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({
              prompt : 'select_account'
            });
            setLoading(true);
            return signInWithPopup(auth, provider)
            .catch((error) => {
              console.log(error);
              setLoading(false);
            })
    
          })
        }
        
      };

      const googleLogOut = () => {
        signOut(auth);
        setCurrentUser(null);
      }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        emailSignIn,
        emailSignUp,
        emailLogOut,
        googleSignIn,
        googleLogOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const UserAuth = () => {
    return useContext(AuthContext);
};