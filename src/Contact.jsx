export default function Contact() {
    return (
        <form method="POST" name="login" data-netlify="true">
            <input type="hidden" name="form-name" value="login"/>
            <input type="email" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password" />
            <button type="submit">login</button>
        </form>
    )
}