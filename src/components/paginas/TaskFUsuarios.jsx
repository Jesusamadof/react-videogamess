import { Form,Formik } from "formik"

function TaskFUsuarios() {
  return (
    <div>
      <Formik>
        <Form>
            <label>title</label>
            <imput type="text" name="title" placeholder="write a title"/>

            <label>description</label>
            <textarea name="description" rows="2" placeholder="write a description" ></textarea>
        <button>
            save
        </button>
        </Form>
      </Formik> 

    </div>
  )
}

export default TaskFUsuarios