import Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),
  PORT: Joi.number().port().default(3000),

  OBSERVE_APP_KEY: Joi.string().required(),
  OBSERVE_APP_SECRET: Joi.string().required(),
});
