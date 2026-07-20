export default function FeaturedItems({name = "Default Feature", description = "This is Default Feature Description."}){
    return(
        <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {name}
                    </dt><br/>
                    <dd className="inline">{description}</dd>
                  </div>
    )
}