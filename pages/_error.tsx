import Link from "next/link";
import Button from "../components/Button";
import ContentWrapper from "../components/ContentWrapper";
import CustomHead from "../components/CustomHead";

type ErrorProps = { res : any, err: any };

function Error(props: any) {
  return (
    <>
      <CustomHead title="404 | Beanstalk" />
      <ContentWrapper variant="farm">
        <div className="space-y-4">
          <h1 className="text-4xl">Page not found.</h1>
          <Link href="/">
            <Button>
              &larr; Back home
            </Button>
          </Link>
        </div>
      </ContentWrapper>
    </>
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