import {useState} from 'react'

export default function SignIn() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value, 
    })
  }

  return (
    <div className='sign-up-container'>
    <form type='submit' onSubmit={handleSubmit} className='sign-up-form'>
      {/* <input
        placeholder='full name'
        type='text'
        name='username'
        onChange={handleChange}
        value={formData.username}
      ></input> */}
      <input
        placeholder='email'
        type='email'
        // name='email'
        // onChange={handleChange}
        // value={formData.username}
        // This will be commented in if we decide to store data
      ></input>
      <input
        placeholder='password'
        type='password'
        name={'password'}
        onChange={handleChange}
        value={formData.password}
      ></input>
      <button
        type='submit'
      >Sign In</button>

    </form>
  </div>
  )
}
