// "presets" need to be double quotes and need to be array
{
    "presets": [
        [
            "@babel/preset-env", {
                "targets": {
                    "browsers": ["> 1%", "last 2 versions"]
                }
            }
        ],
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties"
    ]
}