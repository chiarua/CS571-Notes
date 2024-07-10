import {Button, Col, Container, Form, Row, Pagination} from "react-bootstrap";
import {useEffect, useState} from "react";
import Student from "./Student.jsx";

const Classroom = () => {
    const [sum, setSum] = useState(0);
    const [originStu, setOrigin] = useState([])
    const [students, setStudents] = useState([]);
    const [activePage, setActivePage] = useState(1);
    useEffect(()=>
        fetch("https://cs571.org/api/s24/hw4/students", {
            headers:{
                "X-CS571-ID":"bid_fa_bb0bba617230837b1191c58d3ef68928dc448afd429cc0000459a20d5988fff7"
            }
    })
            .then(res => res.json())
            .then(data => {
                setSum(data.length);
                setStudents(data);
                setOrigin(data);
                console.log(data);
            })
    , [])

    const buildPaginator = () => {
        let pages = [];
        const num_pages = Math.ceil(students.length / 24);
        for(let i = 1; i <= num_pages; i++) {
            pages.push(
                <Pagination.Item
                    key={i}
                    active={activePage === i}
                    onClick={() => setActivePage(i)}
                >
                    {i}
                </Pagination.Item>
            )
        }
        return pages;
    }

    const [searchName, setName] = useState("");
    const [searchMajor, setMajor] = useState("");
    const [searchHobby, setHobby] = useState("");
    useEffect(() => {
        let filterName = originStu;
        let filterMajor = [];
        let filterHobby = [];
        let selectRes = [];
        if (searchName !== ""){
            selectRes = filterName.filter(stu => {
                    let stuName = stu.name.first.toLowerCase()+" "+stu.name.last.toLowerCase()
                    return stuName.includes(searchName.toLowerCase().trim())
                }
            );
            console.log(selectRes.length);
            filterMajor = selectRes;
        }
        else{
            filterMajor = filterName;
        }
        if(searchMajor!==""){
            selectRes = filterMajor.filter(stu=>{
                    let stuMajor = stu.major.toLowerCase();
                    return stuMajor.includes(searchMajor.toLowerCase().trim());
                }
            );
            console.log(selectRes.length);
            filterHobby = selectRes;
        }
        else{
            filterHobby = filterMajor;
        }
        if(searchHobby!==""){
            selectRes = filterHobby.filter(stu=> {
                    let stuHobby = stu.interests;
                    for (let h of stuHobby) {
                        if (h.toLowerCase().includes(searchHobby.toLowerCase().trim())) {
                            return true;
                        }
                    }
                    return false;
                }
            );
            console.log(selectRes.length);

        }
        else{
            selectRes = filterHobby;
        }
        setStudents(selectRes);
        setSum(selectRes.length);
    }, [searchName, searchMajor, searchHobby, originStu])

    return <div>
        <h1>Badger Book</h1>
        <p>Search for students below!</p>
        <hr />
        <Form>
            <Form.Label htmlFor="searchName">Name</Form.Label>
            <Form.Control id="searchName"
                          value={searchName}
                          onChange={e=>setName(e.target.value)}
            />
            <Form.Label htmlFor="searchMajor">Major</Form.Label>
            <Form.Control id="searchMajor"
                value={searchMajor}
                onChange={e=>setMajor(e.target.value)}
            />
            <Form.Label htmlFor="searchInterest">Interest</Form.Label>
            <Form.Control id="searchInterest"
                value={searchHobby}
                onChange={e=>setHobby(e.target.value)}
            />
            <br />
            <Button variant="neutral">Reset Search</Button>
            <br/>
            <Form.Text>There are {sum} student(s) matching your search</Form.Text>
        </Form>
        <Container fluid>
            <Row>
                {
                    students.slice(24*(activePage-1), 24*activePage)
                        .map(stu=><Col xs={12} md={6} lg={4} key={stu.id}>
                        <Student  {...stu}/>
                    </Col>)
                }
            </Row>
        </Container>
        <Pagination>
            {buildPaginator()}
        </Pagination>
    </div>

}

export default Classroom;