export default function Info() {

    const pedidosRecentes = [
        {
            id: 1,
            status: "Entregue",
            data: "10/04/2023"
        },
        {
            id: 2,
            status: "Entregue",
            data: "31/09/2023"
        },
        {
            id: 3,
            status: "cancelado",
            data: "07/02/2024"
        },
        {
            id: 4,
            status: "cancelado",
            data: "19/05/2024"
        },
        {
            id: 5,
            status: "Entregue",
            data: "04/08/2024"
        }
    ]

    return(
        <div className="container mx-auto">
            <div>
            <h1>Pedidos recentes</h1>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {pedidosRecentes.map(item => (
                    <div className="border rounded flex flex-col items-center justify-center" key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.status}</p>
                        <p>{item.data}</p>
                    </div>  

                ))}

            </div>
        </div>
    )
}