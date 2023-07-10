import { useFirestoreDoc } from "~firebase/use-firestore-react"

export default function HistoryPage() {

    const { data: enterpriseData, setData } = useFirestoreDoc<{
        serial: string
    }>("starships/enterprise")

    return (
        <h2>{enterpriseData?.serial || ""}</h2>
    )
}
