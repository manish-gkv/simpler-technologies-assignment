import './UserCard.css';

export default function UserCard({ name, email }) {
    return (
        <div className="user-card">
            <div className="user-image">
                <div className="image"></div>
            </div>
            <div className="user-info">
                <h2>{name}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
}
