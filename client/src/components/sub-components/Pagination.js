function Pagination({ pageNumbers, changePage }) {
    const nums = [];
    for (let i=1; i<=pageNumbers; i++) {
        nums.push(i)
    }
    console.log(nums)
    return ( 
        <>
            {nums.map(n => (<button onClick={() => changePage(n)} key={n}>{n}</button>))}
        </>
     );
}

export default Pagination;