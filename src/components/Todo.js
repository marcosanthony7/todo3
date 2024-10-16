import React, { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

import { db } from '../services/firebase.config'
import EditTodo from './EditTodo';

const Todo = () => {
  const collectionRef = collection(db, 'todo');

  const [createTodo, setCreateTodo] = useState("");

  console.log(createTodo);

  const submitTodo = async (e) => {
    e.preventDefault();
  
    try {
      await addDoc(collectionRef, {
        todo: createTodo,
        isChecked: false,
        timestamp: serverTimestamp()
      })
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div id="main" className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#addModal"
                  type="button"
                  className="btn btn-info">Nova Tarefa
                </button>

        <div className="todo-list">
          <div className="todo-item">
            <hr />
            <span>
              <div className="checker" >
                <span className="" >
                  <input
                    type="checkbox"
                  />
                </span>
              </div>
              &nbsp; Abrir tutorial<br />
              <i>10/11/2024</i>
            </span>
            <span className=" float-end mx-3">
              <EditTodo /></span>
            <button
              type="button"
              className="btn btn-danger float-end">Deletar
            </button>
          </div>

          <div className="todo-item">
            <hr />
            <span>
              <div className="checker" >
                <span className="" >
                  <input
                    type="checkbox"
                  />
                </span>
              </div>
              &nbsp; Abrir tuturial<br />
              <i>10/11/2024</i>
            </span>
            <span className=" float-end mx-3">
              <EditTodo /></span>
            <button
              type="button"
              className="btn btn-danger float-end">Deletar
            </button>
          </div>
        </div> {/* end todo-list */}
              </div> {/* end card-body */}
            </div> {/* end div card */}
          </div> {/* end div main */}
        </div> {/* end div row */}
      </div> {/* container */}

      {/* Modal */}
      <div
        className="modal fade"
        id="addModal"
        tabIndex="-1"
        aria-labelledby="addModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <form className="d-flex" onSubmit={submitTodo}>
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="addModalLabel">
                  Nova Tarefa
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a Todo"
                  onChange={(e) => setCreateTodo(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">Close
                </button>

                <button className="btn btn-primary">Create Todo</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Todo;