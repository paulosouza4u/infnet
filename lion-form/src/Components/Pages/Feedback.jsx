import {Alert, Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {Select} from "../Form/Select.jsx";
import {useEffect, useState} from "react";

export const Feedback = () => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [filter, setFilter] = useState("");
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        select: "",
        text: ""
    });

    useEffect(() => {
        setFormData({ ...formData, select: filter })
    }, [filter]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.nome === "") {
            setError("Necessário preencher o campo nome.");
            return false;
        }

        if (!formData.email.includes("infnet")) {
            setError("Necessário preencher com email institucional.");
            return false;
        }

        if (filter === "") {
            setError("Necessário selecionar a região.");
            return false;
        }

        if (formData.text === "") {
            setError("Necessário preencher o campo overview.");
            return false;
        }

        else {
            setError("");
            setSuccess("Solicitação enviada com sucesso.");
            setTimeout(() => {
                location.reload();
            }, 5000);

            console.log(formData);        }
    }

    return (
        <main>
            <Container>
                <h4>Escreva sobre você e sua região.</h4>
                <div className="mt-5">

                    {error ? (
                        <Alert color="danger">Ops! {error}</Alert>
                    ) : (
                        success && (
                            <Alert color="success">Yes! {success}</Alert>
                        )
                    )}

                    <Form onSubmit={handleSubmit}>
                        <div className="rounded p-4 border">
                            <div className="d-flex gap-4">
                                <FormGroup className="w-50">
                                    <Label for="inputNome">Nome<span className="text-danger">*</span></Label>
                                    <Input id="inputNome"
                                           bsSize="lg"
                                           name="nome"
                                           placeholder="Escreva seu nome"
                                           type="text"
                                           onChange={(event) => setFormData({ ...formData, nome: event.target.value })}/>
                                </FormGroup>
                                <FormGroup className="w-50">
                                    <Label for="inputEmail">Email<span className="text-danger">*</span></Label>
                                    <Input id="inputEmail"
                                           name="email"
                                           bsSize="lg"
                                           placeholder="Escreva seu email"
                                           type="email"
                                           onChange={(event) => setFormData({ ...formData, email: event.target.value })}/>
                                </FormGroup>
                            </div>
                            <div style={{maxWidth: "30rem"}}>
                                <Select setFilter={setFilter}/>
                            </div>
                            <div>
                                <FormGroup>
                                    <Label for="inputText">Seu Overview<span className="text-danger">*</span></Label>
                                    <Input id="inputText"
                                           name="text"
                                           type="textarea"
                                           rows="5"
                                           onChange={(event) => setFormData({ ...formData, text: event.target.value })}/>
                                </FormGroup>
                                <Button color="success" type="submit" className="my-3">Solicitar análise</Button>
                                <p className="mt-2"><small><span className="text-danger me-1">*</span>Campo obrigatório.</small></p>
                            </div>
                        </div>
                    </Form>
                </div>
            </Container>
        </main>
    );
}