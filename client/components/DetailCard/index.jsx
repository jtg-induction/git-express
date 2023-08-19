import React from 'react';
import { Typography, Avatar, Box, Divider, Chip, SvgIcon } from '@mui/material';
import { Email, LocationOn, Twitter, Work } from '@mui/icons-material';

export const DetailCard = ({
  username,
  avatarUrl,
  name,
  company,
  location,
  email,
  bio,
  followersCount,
  followingCount,
  totalReposCount,
  collaborators,
  twitterUsername,
}) => {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.typography.pxToRem(20),
        width: '100%',
        maxWidth: theme.typography.pxToRem(400),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '8px',
        border: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Avatar
        src={avatarUrl}
        alt={username}
        sx={(theme) => ({
          height: theme.typography.pxToRem(96),
          width: theme.typography.pxToRem(96),
          margin: theme.typography.pxToRem(10),
        })}
      />
      <Typography variant="h6">{name}</Typography>
      <Typography
        variant="caption"
        sx={(theme) => ({
          fontSize: theme.typography.pxToRem(11.2),
          mb: theme.typography.pxToRem(20),
        })}
      >
        {bio}
      </Typography>
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'space-around',
          mb: theme.typography.pxToRem(20),
          width: '100%',
          '.col-4': {
            textAlign: 'center',
          },
        })}
      >
        <Box className="col-4">
          <Typography variant="h6" color="text.secondary">
            {followersCount}
          </Typography>
          <Typography variant="body2">followers</Typography>
        </Box>
        <Box className="col-4">
          <Typography variant="h6" color="text.secondary">
            {followingCount}
          </Typography>
          <Typography variant="body2">following</Typography>
        </Box>
      </Box>
      <Box alignSelf="flex-start" display="flex" gap={1} flexWrap="wrap">
        {totalReposCount >= 0 && (
          <Chip
            sx={{
              maxWidth: '300px',
            }}
            label={`${totalReposCount} Repositories`}
          />
        )}
        {company && (
          <Chip
            sx={{
              maxWidth: '300px',
            }}
            icon={
              <SvgIcon fontSize="small">
                <Work />
              </SvgIcon>
            }
            label={company}
          />
        )}
        {collaborators >= 0 && (
          <Chip
            sx={{
              maxWidth: '300px',
            }}
            label={`${collaborators} Collaborators`}
          />
        )}
        {twitterUsername && (
          <Chip
            icon={
              <SvgIcon fontSize="small">
                <Twitter />
              </SvgIcon>
            }
            label={twitterUsername}
          />
        )}
      </Box>
      <Divider
        sx={{
          mt: 3,
          width: '100%',
        }}
      />
      <Box
        alignSelf="flex-start"
        color={(theme) => theme.palette.text.secondary}
        display="flex"
        flexDirection="column"
        gap={0.5}
        mt={1}
      >
        {location && (
          <Box display="flex" alignItems="center" gap={0.5}>
            <LocationOn />
            <Typography variant="subtitle2">{location}</Typography>
          </Box>
        )}
        {email && (
          <Box display="flex" alignItems="center" gap={0.5}>
            <Email />
            <Typography variant="subtitle2">{email}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DetailCard;
