type Props = {
  label: string
  subLabel: string
}

const InfoItem = ({ label, subLabel }: Props) => {
  return (
    <div className="flex flex-col text-center">
      <p className="text-gray-100 text-heading-2 font-label font-bold mb-2">
        {label}
      </p>
      <p className="text-heading-4 text-gray-70 font-bold">{subLabel}</p>
    </div>
  )
}
export default InfoItem
