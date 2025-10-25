export const ErrorMessage = ({errorMsg} : {errorMsg?:string}):React.ReactElement => {
    return (<>
    <div>
        {errorMsg == null ? "An error has occoured. Please try again later." : errorMsg}
    </div>
    </>)
}