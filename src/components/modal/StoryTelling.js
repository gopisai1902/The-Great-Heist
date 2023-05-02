import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const StoryTelling = (params) => {
    const [show, setShow] = useState(params.show);
    const [idx, setIdx] = useState(0)
    const [story, setStory] = useState(params.story)
    const [displayClose, setDisplayClose] = useState(story.transactions.length)
    const [transaction, setTransaction] = useState(story.transactions[0])

    const handleClose = () =>{
        setShow(false);
        setIdx(0);
        setTransaction(story.transactions[0]);
    } 
    const handleShow = () => setShow(true);

    const handleNext = () => {
        if(idx + 1 < story.transactions.length){
            setIdx(idx + 1)
            setTransaction(story.transactions[idx + 1])
        }
        else{
            handleClose()
        }
    }

    const handlePrev = () => {
        if(idx > 0){
            setIdx(idx - 1)
            setTransaction(story.transactions[idx - 1])
        }
    }

    return (
        <div>
            <Button 
                variant="primary" 
                onClick={handleShow}
                style={{position: "absolute", left: 0, bottom: 0, margin: "1vw"}}
                className='mt-3'
            >
                Story Telling
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title>{params.story.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {transaction}
                </Modal.Body>
                <Modal.Footer>
                    {
                        idx === 0
                        ?
                        <Button variant="danger" onClick={handlePrev} disabled>
                            Prev
                        </Button>
                        :
                        <Button variant="danger" onClick={handlePrev}>
                            Prev
                        </Button>
                    }
                    <Button variant="success" onClick={handleNext}>
                        {
                            idx + 1 === displayClose
                            ?
                            <>Close</>
                            :
                            <>Next</>
                        }
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default StoryTelling;