"use client"
import dynamic from 'next/dynamic'

const MyLightbox = dynamic(() => import('@/components/MyLightbox/MyLightbox'), { ssr: false })
const FeaturesGallery = dynamic(() => import('@/app/projects/_components/featuresGallery/FeaturesGallery.js'), { ssr: false })

export function MyLightboxClient(props) {
    return <MyLightbox {...props} />
}

export function FeaturesGalleryClient(props) {
    return <FeaturesGallery {...props} />
}
