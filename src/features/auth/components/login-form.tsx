import { Button, Checkbox, Divider, Input, Link } from "@nextui-org/react"
import NextLink from "next/link"

const LoginForm = () => {
    return (
        <>
            <h2 className="text-3xl font-semibold max-w-sm mx-auto w-full px-4 mb-8">Sign in to <br /> NextJS Appwrite Starter</h2>

            <form className="w-full max-w-sm mx-auto p-4 flex flex-col items-center justify-between gap-4">

                <Input type="email" label="Email" />
                <Input type="password" label="Password" />
                <div className="w-full flex justify-between items-center">
                    <Checkbox>Remember me</Checkbox>
                    <Link as={NextLink} underline="always" size="sm" color="foreground" href="/forgot-password">Forgot Password</Link>
                </div>
                <Button color="primary" type="submit" fullWidth>Login</Button>
                <div className=" flex w-full gap-2 items-center">
                    <Divider className="flex-1" />
                    <span className="text-sm text-neutral-400">or continue with</span>
                    <Divider className="flex-1" />
                </div>
                <div className="flex justify-between w-full gap-2 items-center">
                    <Button className="flex-1" type="button" variant="bordered" >Google</Button>
                    <Button className="flex-1" type="button" variant="bordered" >Twitter</Button>
                    <Button className="flex-1" type="button" variant="bordered" >Spotify</Button>
                </div>
                <p className="mt-4">
                    Don&apos;t have an account? <Link as={NextLink} underline="hover" size="sm" color="primary" href="/register">Sign Up now</Link>
                </p>
            </form>
        </>
    )
}
export default LoginForm