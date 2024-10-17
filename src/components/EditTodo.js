import React from 'react';

const EditTodo = () => {
    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                >
                Editar
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="editLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            id="editLabel">
                            Atualizar detalhes
                        </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close">
                </button>
            </div>
                <div className="modal-body">

                <form className="d-flex">
                <input
                    type="text"
                    className="form-control"
                />
                </form>

            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal">Fechar
                </button>
                <button
                    type="button"
                    className="btn btn-primary">
                    Atualizar
                </button>
            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTodo;