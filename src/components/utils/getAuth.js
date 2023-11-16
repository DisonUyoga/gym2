import axios from 'axios'


export async function registerUser(cred){
  const URL='/api/users/'
  const res = await axios.post(URL, cred)
  return res.data
}

export async function loginUser(cred){
  const URL="/api/users/token/"
  try {
    const res= await axios.post(URL, cred)
    return res.data
  } catch (error) {
    return error.message
  }
  
}