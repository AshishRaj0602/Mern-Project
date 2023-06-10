class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    search(){
        const keywords = this.queryStr?{
            name:{
                $regex:this.queryStr,
                $options:"i",
            }
        }:{};
        this.query = this.query.find({...keywords});
    }
}


module.exports =ApiFeatures;