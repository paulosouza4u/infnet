import {useEffect, useState} from "react";
import {Alert, Container, FormGroup, Input, Label, Spinner} from "reactstrap";

export const Select = ({setFilter}) => {

    const [regiao, setRegiao] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://api.npoint.io/6b764b016ee8187efee3");
                if (!response.ok) {
                    throw new Error("Algo deu errado ao carregar as regiões!");
                }
                const data = await response.json();
                if (!data || typeof data !== "object") {
                    throw new Error("Formato de resposta inválido");
                }
                setRegiao(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    if (error) {
        return (
            <Container>
                <Alert color="danger">Ops! {error}</Alert>
            </Container>
        );
    }

    if (loading) {
        return (
            <Container>
                <div className="d-flex align-items-center justify-content-center">
                    <Spinner></Spinner><span className="ms-3">Carregando...</span>
                </div>
            </Container>
        );
    }

    return (
        <>
            <FormGroup>
                {regiao.length > 0 ? (
                    <>
                        <Label for="regionSelect">Selecione a região<span className="text-danger">*</span></Label>
                        <Input id="regionSelect"
                               bsSize="lg"
                               name="select"
                               type="select"
                               onChange={(e) => {
                                   setFilter !== undefined && setFilter(e.target.value);
                               }}>
                            <option value="">Selecione...</option>
                            {regiao.length && (
                                regiao.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))
                            )}
                        </Input>
                    </>
                ) : (
                    <Alert color="secondary">
                        Que pena. A lista de região esta vazia! =/
                    </Alert>
                )}
            </FormGroup>
        </>
    );
}