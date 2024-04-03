interface AlertProps {
  message: string
}

export default function Alert({ message }: AlertProps) {
  return (
    <div className="alert bg-gradient-dark alert-dismissible text-sm  text-white  fade show" role="alert">
        <span className="alert-icon"><i className="ni ni-tag"></i></span>
        <span className="alert-text"><strong>Dark!</strong> {message} </span>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
  )
}