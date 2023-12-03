import Reacr from 'react';
import { useSelector } from 'react-redux';
import { ModalWrapper } from './Modal.style';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '../../reducer';


export default function Modal() {
    const isShow = useSelector((state) => state.modal.isShow)
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL });
    }

    if (!isShow) { return null };

    return (
        <ModalWrapper>
            <div className="container" >
                <div className="header" >
                    <h1>Modal header</h1>
                    <button className="close"
                        onClick={closeModal} >Close</button>
                </div>
                <div className="content" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia dolor id mauris sollicitudin tristique. Fusce eget erat sapien. Praesent at orci lectus. Quisque viverra libero et felis condimentum, vitae ullamcorper velit volutpat. Aenean fermentum sem mi, in faucibus enim porttitor rutrum. Mauris pulvinar magna non leo aliquam, vitae consectetur tellus congue. Duis viverra, urna at dictum suscipit, urna mauris volutpat dui, eget faucibus mi metus sit amet dui. Donec eu mauris arcu. Sed lobortis urna et sem vulputate, eu dapibus ligula interdum. Vivamus in tempor leo. Sed hendrerit interdum aliquam. Sed enim odio, luctus ut dignissim vel, facilisis non elit. Proin non iaculis risus. Maecenas et eros mollis, egestas nunc sit amet, egestas quam. Maecenas luctus orci mauris, id convallis felis pellentesque eget. Fusce ultricies faucibus orci vitae porttitor.

                    </p>
                </div>
            </div>
        </ModalWrapper>
    );
}