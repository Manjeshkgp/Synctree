import Loginclient from '../components/auth/Loginclient'

export default function Page () {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <Loginclient/>
      </div>
    </div>
  )
}