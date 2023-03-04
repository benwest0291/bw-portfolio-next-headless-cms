import Image from "next/image";

const ServiceCard = ({heading, paragraph}) => {
  return (
    <div className="service__card">
      <Image className="mb-3"alt="service image" src={"/code.svg" }width={50} height={50}></Image>
      <h5 className="mb-4">{ heading }</h5>
      <p className="text-center">I{ paragraph }</p>
    </div>
  )
}

export default ServiceCard
