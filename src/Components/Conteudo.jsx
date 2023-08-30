export default function Conteudo(props){

    return(
        <>
         <section>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <p>
                {props.novoProps}
                </p>

                <div>
                    <img src={props.uriLogoReact} alt={props.altLogoReact} />
                </div>
            </div>
         </section>
        </>
    )
}