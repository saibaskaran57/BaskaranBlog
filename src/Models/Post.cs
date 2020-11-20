namespace BaskaranBlog.Models
{
    using System.Collections.Generic;

    /// <summary>
    /// A class represents post information.
    /// </summary>
    public class Post
    {
        /// <summary>
        /// Gets or sets post year.
        /// </summary>
        public string Year { get; set; }

        /// <summary>
        /// Gets or sets post name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets post url.
        /// </summary>
        public string Url { get; set; }

        /// <summary>
        /// Gets or sets post date.
        /// </summary>
        public string Date { get; set; }

        /// <summary>
        /// Gets or sets post description.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets pinned post information.
        /// </summary>
        public Pinned Pinned { get; set; }

        /// <summary>
        /// Gets or sets post tags.
        /// </summary>
        public List<string> Tags { get; set; }
    }
}
