export default function FooterComp(props){
    const currYear = new Date().getFullYear();
    return (
        <div className={props.darkmode ?"footer-text-dark" : "footer-text"}>
        <small>@{currYear} Development. All rights reserved.</small>
        </div>
    )
}