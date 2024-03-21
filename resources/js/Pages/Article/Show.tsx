// import Layout from './Layout'
import { Head, Link } from '@inertiajs/react'

const Show = ({ title, description, image }) => {
  return (
    <>
      <Head title={title} />
      <p className='mb-5'><Link href="/en-continu">Retour</Link></p>
      <img className='mb-2' style={{maxWidth: '500px'}} src={image.url} alt={image.alt}/>
      <h1 className='text-2xl font-bold mb-3'>{title}</h1>
      <p>{description}</p>
    </>
  )
}

export default Show
