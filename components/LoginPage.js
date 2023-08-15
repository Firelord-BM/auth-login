import React,{useState} from 'react'
import { connect } from 'react-redux';
import { loginUser } from '@/actions/auth';

const LoginPage = ({loading, error, loginUser}) => {

    const [credentials, setCredentials] = useState({username:"", password:""});

    const handleLogin = () => {
        loginUser(credentials)
    }
  return (
    <div className='text-black'>
        <h2 className='text-white'>Login</h2>
        {error && <p className='error text-red-700'>{error}</p>}
        <input
        type='text'
        className='text-black'
        placeholder='Username'
        value={credentials.username}
        onChange={e => setCredentials({...credentials, username: e.target.value})}/>

        <input
        type='password'
        className='text-black'
        placeholder='Password'
        value={credentials.password}
        onChange={e => setCredentials({...credentials, password: e.target.value})}/>

        <button className="text-white" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in...": "Login"}
        </button>
    </div>
  )
}

const mapStateToProps = state => ({
    loading: state.auth.loading,
    error: state.auth.error
})

const mapDispatchToProps = {
    loginUser
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)