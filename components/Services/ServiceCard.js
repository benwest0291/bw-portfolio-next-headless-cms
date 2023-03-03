import Image from "next/image";

const ServiceCard = () => {
  return (
    <div className="service__card">
      <Image className="mb-3"alt="service image" src="/code.svg" width={50} height={50}></Image>
      <h5 className="mb-4">Web Development</h5>
      <p className="text-center">I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.</p>
    </div>
  )
}

export default ServiceCard
