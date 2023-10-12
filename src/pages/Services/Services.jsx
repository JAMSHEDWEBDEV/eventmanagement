
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    console.log(service);
    const {name,img,description,details_button} = service || {};
    return (
            <div>
                <div className="card bg-base-100 shadow-xl" data-aos="zoom-in">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="pic_png" className="rounded" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                        <div className="card-actions">
                            <Link to={`/service/${service.id}`}><button className="btn bg-green-500 font-bold">{details_button}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

Services.propTypes = {
    service:PropTypes.object
}
export default Services;