import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export function Github(props) {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/yuvraj-mehta')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data);
  //     })
  // }, [])

  return (
    <>
      <div className='text-center m-4  bg-gray-600 text-white text-3xl p-4'>Github Followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" className='mx-auto rounded-full' />
      </div>
    </>
  )
}


export const GithubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/yuvraj-mehta')
  return response.json()
}

