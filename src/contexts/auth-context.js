import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginServices, signupSevices } from '../Services/Services';
import { ToastHandler } from '../utils/toastfunction';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem('login'));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem('login'));
  const [user, setUser] = useState(localStorageUser?.user);
  const navigate = useNavigate();

  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate('/video');
      });
    }
    return () => clearTimeout(id);
  }, [token]);

  const loginHandler = async (e, setLogin, login) => {
    e.preventDefault();
    try {
      let resp;
      if (e.target.innerText === 'Sign In as Guest') {
        setLogin({
          email: 'adarshbalak@gmail.com',
          password: 'adarshBalaki123',
        });
        resp = await loginServices('adarshbalak@gmail.com', 'adarshBalaki123');
      } else {
        resp = await loginServices(login.email, login.password);
      }
      if (resp.status === 200) {
        localStorage.setItem(
          'login',
          JSON.stringify({
            token: resp.data.encodedToken,
            user: resp.data.foundUser,
          })
        );

        ToastHandler('success', 'Successfully Logged In');

        setUser(resp.data.foundUser);
        setToken(resp.data.encodedToken);
      }
    } catch (error) {
      ToastHandler('warn', 'Please Enter Valid Username and Password');
      console.error(error);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem('login');
    setToken(null);
    setUser(null);
    ToastHandler('success', 'Successfully Logged Out');
    navigate('/');
  };

  const signupHandler = async (email, password, firstName, lastName) => {
    if (firstName && lastName && password && email !== '') {
      try {
        const resp = await signupSevices(email, password, firstName, lastName);
        if (resp.status === 201) {
          localStorage.setItem(
            'login',
            JSON.stringify({
              token: resp.data.encodedToken,
              user: resp.data.createdUser,
            })
          );
          ToastHandler('success', 'Your Account Is Ready');
          setUser(resp.data.createdUser);
          setToken(resp.data.encodedToken);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      ToastHandler('warn', 'Please Enter Valid User Detail');
    }
  };

  return (
    <AuthContext.Provider
      value={{ logoutHandler, loginHandler, signupHandler, token, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
