import { useEffect, useState } from "react"

interface Address {
    logradouro?: number;
    bairro?: string;
    localidade?: string;
    uf?: string;
}

interface Props {
    zip?: number;
}

export default function Cep({zip}: Props) {
    const [address, setAddress] = useState<Address>({});

    const getAddress = async (zip?: number) => {
        try {
            const response: Response = await fetch(`https://viacep.com.br/ws/${zip}/json/`);
            const data: Address = await response.json();
            console.log(data);
    
            setAddress({
                logradouro: data.logradouro,
                bairro: data.bairro,
                localidade: data.localidade,
                uf: data.uf
            });
        } catch (err) {
            console.log(err);
        }            
    }

    useEffect(() => {
            getAddress(zip);
    }, [zip]);
    return (
        <div>
            <p>Endereço: {address.logradouro}</p>
            <p>Bairro: {address.bairro}</p>
            <p>Cidade: {address.localidade}</p>
            <p>Estado: {address.uf}</p>
        </div>
    )
}