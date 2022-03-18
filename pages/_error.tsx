type ErrorProps = { res : any, err: any };

function Error(props: any) {
  return (
    <p>
      {props.statusCode
        ? `An error ${props.statusCode} occurred on server`
        : 'An error occurred on client'}
      {props.err?.toString()}
    </p>
  )
}

Error.getInitialProps = ({ res, err } : ErrorProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { 
    statusCode,
    err,
  }
}

export default Error;