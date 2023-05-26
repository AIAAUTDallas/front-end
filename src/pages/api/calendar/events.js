import { REST } from '@discordjs/rest';
import { API } from '@discordjs/core';

export default async function index(req, res) {
  try {
    const token = process.env.DISCORD_BOT_TOKEN;
    const guildId = process.env.DISCORD_AIAA_GUILD_ID;

    const rest = new REST({ version: '10' }).setToken(token);
    const api = new API(rest);

    const events = await api.guilds.getScheduledEvents(guildId);

    console.log(events)
    const transformedEvents = events.map(event => {
      return {
        id: event.id,
        channelId: event.channel_id,
        title: event.name,
        url: null,
        start: event.scheduled_start_time,
        end: event.scheduled_end_time,
        extendedProps: {
          groupName: "",
          description: event.description,
          location: event.entity_metadata?.location,
          image: event?.id && event?.image ? `https://cdn.discordapp.com/guild-events/${event.id}/${event?.image}` : null,
        }
      }
    })

    res.status(200).json({ message: 'Guild event information retrieved', transformedEvents });
  } catch (error) {
    console.error('API request error:', error);
    res.status(500).json({ error: 'Failed to retrieve guild event information' });
  }
}
