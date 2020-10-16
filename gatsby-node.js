exports.onPreBootstrap = ({ reporter }, pluginOptions) => {
  if (!pluginOptions || !pluginOptions.accountId)
    return reporter.panic(
      'gatsby-plugin-vwo: You must provide your VWO account ID'
    )
}
