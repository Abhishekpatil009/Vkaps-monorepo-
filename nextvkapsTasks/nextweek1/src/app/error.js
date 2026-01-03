"use client"

export default function Error({error}) {
  return(
    <div>
      <p>Something went wrong</p>
      <p>{error.message}</p>
    </div>
  )
}
