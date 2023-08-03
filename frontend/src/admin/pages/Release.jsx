import { useParams } from "react-router-dom";

const Release = () => {
    return <>Release! {useParams().slug}</>;
};

export default Release;
