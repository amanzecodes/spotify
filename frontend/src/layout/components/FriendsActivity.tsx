import { useUserStore } from "@/stores/useUserStore"
import { useEffect } from "react"
const FriendsActivity = () => {
    const {fetchUser}  = useUserStore()
    useEffect(() => {
        fetchUser()
    }, [fetchUser])
  return (
    <>
   </>
  )
}

export default FriendsActivity