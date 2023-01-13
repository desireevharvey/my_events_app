


<div>
{userProductData.map((product, i) => {
    return(
    <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={product.image} alt={product.title}/>
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>

</div>