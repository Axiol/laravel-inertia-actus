// import Layout from './Layout'
import { Head, Link } from '@inertiajs/react'

const Show = ({ title, description, image }) => {
  console.log(image)
  return (
    <>
      <Head title={title} />
      <p><Link href="/en-continu">Retour</Link></p>
      <img style={{maxWidth: '500px'}} src={image.url} alt={image.alt}/>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  )
}

export default Show
