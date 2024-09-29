type Props = {
    children: React.ReactNode
}
function AuthLayout({ children }: Props) {
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">{children}</div>
    )
}
export default AuthLayout