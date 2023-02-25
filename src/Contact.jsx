export default function Contact() {
    return (
        <form method="POST" action="#" name="login" netlify>
            <input type="hidden" name="form-name" value="login"/>
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">login</button>
        </form>
    )
}