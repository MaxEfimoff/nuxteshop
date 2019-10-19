export const commands = {
  'DELETE_BLOG': 'DELETE_BLOG',
  'EDIT_BLOG': 'EDIT_BLOG',
}

const createOption = (name, command) => ({name, command});

// Options for published blogs
const DELETE_BLOG = createOption('Delete blog', commands.DELETE_BLOG);
const EDIT_BLOG = createOption('Edit blog', commands.EDIT_BLOG);
const FEATURE_BLOG = createOption('Feature blog', commands.TOGGLE_FEATURE);
const UN_FEATURE_BLOG = createOption('Un-Feature blog', commands.TOGGLE_FEATURE);

// Options for draft blogs
const DELETE_DRAFT = createOption('Delete draft', commands.DELETE_BLOG);
const EDIT_DRAFT = createOption('Edit draft', commands.EDIT_BLOG);

export const createPublishedOptions = (isFeatured) => {
  const options = [EDIT_BLOG, DELETE_BLOG]

  isFeatured ? options.push(UN_FEATURE_BLOG) : options.push(FEATURE_BLOG)

  return options;
}

export const createDraftsOptions = () => [EDIT_DRAFT, DELETE_DRAFT];