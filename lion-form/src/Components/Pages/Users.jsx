import {Select} from "../Form/Select.jsx";
import {useEffect, useState} from "react";
import {UserCard} from "../Form/UserCard.jsx";
import {Alert, Container, Form, Modal, ModalBody, ModalHeader, Spinner} from "reactstrap";

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [userSelected, setUserSelected] = useState(null);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://api.npoint.io/b47cdede0b35a1f66c4c");
                if (!response.ok) {
                    throw new Error("Algo deu errado ao carregar os usuarios!");
                }
                const data = await response.json();
                if (!data || typeof data !== "object") {
                    throw new Error("Formato de resposta inválido");
                }
                setUsers(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    const toggleModal = () => setModalOpen(!modalOpen);
    const handleModal = (user) => {
        setUserSelected(user);
        toggleModal();
    }
    const usersFilter = users.length > 0 && (
        users.filter((itens) => itens.regiao.toLowerCase().includes(filter.toLowerCase()))
    );

    if (error) {
        return (
            <Container style={{ height: "64dvh", marginTop: "4rem" }}>
                <Alert color="danger">Ops! {error}</Alert>
            </Container>
        );
    }

    if (loading) {
        return (
            <Container style={{ height: "64dvh", marginTop: "4rem", textAlign: "center" }}>
                <div className="d-flex align-items-center justify-content-center">
                    <Spinner></Spinner><span className="ms-3">Carregando...</span>
                </div>
            </Container>
        );
    }

    return (
        <main>
            <Container>
                <div>
                    <div>
                        <Form>
                            <div className="mx-auto rounded p-3 border" style={{maxWidth: "30rem"}}>
                                <Select setFilter={setFilter}/>
                            </div>
                        </Form>
                    </div>
                    <div className="my-5">
                        { usersFilter.length > 0 ? (
                                <div className="d-flex flex-wrap justify-content-center gap-5">
                                    {usersFilter.map((user) => (
                                        <div key={ user.id } className="">
                                            <UserCard user={user} onClick={()=>handleModal(user)} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <Alert color="secondary">
                                    Que pena. A lista de usuários esta vazia! =/
                                </Alert>
                            )}
                    </div>
                </div>
            </Container>
            <Modal isOpen={modalOpen} toggle={toggleModal} centered>
                <ModalHeader toggle={toggleModal}>Overview</ModalHeader>
                <ModalBody>
                    {userSelected && (
                        <>
                            <h4>
                                {userSelected.nome}
                            </h4>
                            <p><em>
                                {userSelected.resumo}
                            </em></p>
                        </>
                    )}
                </ModalBody>
            </Modal>
        </main>
    );
}