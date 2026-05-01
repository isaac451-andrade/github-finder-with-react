type ErroProps = {
    erro: string;
}

function Error({ erro }: ErroProps) {
    return (
        <div style={{ textAlign: "center", color: "#fff", fontSize: "32px" }}>
            {erro}
        </div>
    )
}

export default Error