import UserCard from "./UserCard";
import './Home.css';
export default function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of our application.</p>
            <div className="user-cards">
                <UserCard name="Manish" email="manish@gmail.com" />
                <UserCard name="John Doe" email="john@example.com" />
                <UserCard name="Jane Smith" email="jane@example.com" />
            </div>
            
        </div>
    );
}
